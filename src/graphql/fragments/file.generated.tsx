import * as Types from '../../types/graphql';

import gql from 'graphql-tag';

export type FileFragmentFragment = (
  { __typename?: 'File' }
  & Pick<Types.File, 'id' | 'filename' | 'url'>
);

export const FileFragmentFragmentDoc = gql`
    fragment FileFragment on File {
  id
  filename
  url
}
    `;