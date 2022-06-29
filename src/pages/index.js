import { Container, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Container fontFamily='Red Hat Mono'>
      <Layout>
        <Text>Hello Word</Text>
      </Layout>
    </Container>
  );
}
