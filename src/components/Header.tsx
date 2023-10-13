import {
  Container,
  createStyles,
  Group,
  Menu,
  rem,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useIdentify } from '@unrevealed/react';
import { useEffect, useState } from 'react';
import { User, users } from '~/data/users';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    marginBottom: rem(120),
  },

  user: {
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
}));

export function Header() {
  const { classes, cx } = useStyles();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const { identify } = useIdentify();

  useEffect(() => {
    identify(
      currentUser
        ? {
            user: {
              id: currentUser.id,
              traits: {
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email,
                age: currentUser.age,
                jobTitle: currentUser.jobTitle,
              },
            },
            team: {
              id: currentUser.team.id,
              traits: {
                name: currentUser.team.name,
                country: currentUser.team.country,
                industry: currentUser.team.industry,
              },
            },
          }
        : { user: null, team: null },
    );
  }, [currentUser, identify]);

  return (
    <div className={classes.header}>
      <Container>
        <Group position="right">
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton className={cx(classes.user)}>
                <Group spacing={7}>
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {currentUser
                      ? `${currentUser.firstName} ${currentUser.lastName} (${currentUser.team.name})`
                      : 'Login as'}
                  </Text>
                  <IconChevronDown size={rem(12)} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              {users.map((user) => (
                <Menu.Item
                  key={user.id}
                  onClick={() => setCurrentUser(user)}
                  color={user.id === currentUser?.id ? 'blue' : undefined}
                >
                  {user.firstName} {user.lastName} ({user.team.name})
                </Menu.Item>
              ))}
              {!!currentUser && (
                <Menu.Item onClick={() => setCurrentUser(null)}>
                  Log out
                </Menu.Item>
              )}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}
