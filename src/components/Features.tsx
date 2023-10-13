import {
  Card,
  Container,
  createStyles,
  rem,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function Features() {
  const { classes } = useStyles();

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm"></Title>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {/* {workflow.enabled && (
          <Feature feature={features['workflow']} classes={classes} />
        )}
        {codeGeneration.enabled && (
          <Feature feature={features['code-generation']} classes={classes} />
        )}
        {sdks.enabled && (
          <Feature feature={features['sdks']} classes={classes} />
        )}
        {vscodeExtension.enabled && (
          <Feature feature={features['vscode-extension']} classes={classes} />
        )}
        {peopleView.enabled && (
          <Feature feature={features['people-view']} classes={classes} />
        )}
        {partialRollouts.enabled && (
          <Feature feature={features['partial-rollouts']} classes={classes} />
        )} */}
      </SimpleGrid>
    </Container>
  );
}

function Feature({
  feature,
  classes,
}: {
  feature: { name: string; description: string };
  classes: {
    title: string;
    description: string;
    card: string;
    cardTitle: string;
  };
}) {
  return (
    <Card shadow="md" radius="md" className={classes.card} padding="xl">
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.name}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  );
}
