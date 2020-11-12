import config from '../config/config';

const imageUploadHandler = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();

  reader.onload = async () => {
    const { result } = reader;
    const base64 = result.replace(/^data:image\/\w+;base64,/gm, '');

    try {
      const response = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
          Authorization: `Client-ID ${config.IMGUR_CLIENT_ID}`,
          Accept: 'application/json',
        },
        body: base64,
      });
      const returnData = await response.json();

      const { data: { link } } = returnData;
      resolve(link);
    } catch (error) {
      reject(error);
    }
  };

  reader.readAsDataURL(file);
});

export default imageUploadHandler;
