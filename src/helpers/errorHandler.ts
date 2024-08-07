import get from 'lodash/get';

export const getApiError = async (error: {
  response: { data: { message: string }; status: number };
}) => {
  if (get(error, 'response.status') === 400 || 404 || 500) {
    return {
      message: get(error, 'response.data.message') || '',
      status: error.response.status,
    };
  }
};
