import { Stack } from '@mantine/core';
import { Features } from '~/components/Features';
import { Header } from '~/components/Header';

export default function Home() {
  return (
    <Stack>
      <Header />
      <Features />
    </Stack>
  );
}
