import { expect } from 'chai';

import { createUser  } from '../factories/users';
import testQuery from '../utils/testQuery';

describe('authTokens', () => {

  it('createAuthToken', async () => {
    const email = 'test@my.app';
    const password = 'SecURePaSswOrd';

    const prepareUser = createUser({
      email,
      password
    });

    const response = await testQuery({
      prepareData: [ prepareUser ],
      query(data) {
        return `
          mutation {
            createAuthToken(
              email: "${data.user[0].email}",
              password: "${password}"
            ) {
              token
            }
          }
        `;
      }
    });

    expect(response.data)
      .to.have.deep.property('createAuthToken.token')
      .to.have.length(256);
  });

});
