import Comm from '../../services/Comm';
import Uri from '../../services/Uri';
import Catch404 from '../../services/Catch404';

const GetFollowers = async (login: string) => {
  let result;
  let error: {code: number; message: string} = {
    code: 0,
    message: '',
  };

  await Comm.request({
    url: Uri.followers({login}),
    method: 'get',
  })
    .then(res => {
      result = res.data;
      // console.log(res)
    })
    .catch(
      Catch404(err => {
        error.code = err.response.status;
        error.message = err.response.data.message;
      }, error),
    );

  if (error.code) {
    return Promise.reject(error);
  }

  return Promise.resolve(result);
};

export default GetFollowers;
