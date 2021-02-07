import bcrypt from 'bcrypt'

export async function encrypt (str: String): Promise<String>
{
  return new Promise((resolve, reject) => {
    bcrypt.hash(str, 10, function (err, hash) {
      if (err) {
        return reject(err)
      }

      resolve(hash)
    })
  })
}

export async function compare (str: String, hash: String): Promise<boolean>
{
  return new Promise((resolve, reject) => {
    bcrypt.compare(str, hash, function(err, result) {
        if (err) {
          return reject(err)
        }

        resolve(result)
    });
  });
}
