import { expect } from 'chai';

import { createUsers  } from '../factories/users';
import { loginUser  } from '../factories/authToken';
import { createRecipe } from '../factories/recipes';
import testQuery from '../utils/testQuery';

describe('recipes', () => {

  it('gets only the recipes of the viewer', async () => {
    const response = await testQuery({
      prepareData: [
        createUsers(2),
        loginUser(1),
        createRecipe(1)
      ],
      query(data) {
        return `
          query {
            viewer(token: "${data.authToken[0].token}") {
              recipes {
                name
              }
            }
          }
        `;
      }
    });

    const { recipes } = response.data.viewer;

    expect(recipes).to.have.length(1);
    expect(recipes[0]).to.deep.equal(recipes[0]);
  });

});
