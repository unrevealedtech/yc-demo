import {
  Card,
  Container,
  createStyles,
  rem,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { useFeature } from '@unrevealed/react';
import { features } from '~/generated/unrevealed';

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

  const like = useFeature('like');
  const dislike = useFeature('dislike');
  const superlike = useFeature('superlike');
  const boost = useFeature('boost');
  const unlimitedLikes = useFeature('unlimited-likes');
  const viewLikes = useFeature('view-likes');
  const instagram = useFeature('instagram');

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm"></Title>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {like.enabled && (
          <Feature feature={features['like']} classes={classes} />
        )}
        {dislike.enabled && (
          <Feature feature={features['dislike']} classes={classes} />
        )}
        {superlike.enabled && (
          <Feature feature={features['superlike']} classes={classes} />
        )}
        {boost.enabled && (
          <Feature feature={features['boost']} classes={classes} />
        )}
        {unlimitedLikes.enabled && (
          <Feature feature={features['unlimited-likes']} classes={classes} />
        )}
        {viewLikes.enabled && (
          <Feature feature={features['view-likes']} classes={classes} />
        )}
        {instagram.enabled && (
          <Feature feature={features['instagram']} classes={classes} />
        )}
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
