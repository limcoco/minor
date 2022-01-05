import { useParams } from 'react-router-dom';
import { useShopQuery, RawHtml } from '@shopify/hydrogen';
import gql from 'graphql-tag';
import { useState } from 'react';
import ImageContent from '../../components/ImageContent.client';
import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';

export default function Page() {
  const { handle } = useParams();
  const { data } = useShopQuery({ query: QUERY, variables: { handle } });
  const [values, setValues] = useState({});

  if (!data.pageByHandle) {
    return <NotFound />;
  }

  const page = data.pageByHandle;

  return (
      <ImageContent />
  );
}

const QUERY = gql`
  query PageDetails($handle: String!) {
    pageByHandle(handle: $handle) {
      title
      body
    }
  }
`;
