import assert from 'assert';
import login from '../utils/login.mjs';

it("Login API should return a valid login token",async ()=>{

    const loginToken= await login({userName:"dev_apitestkaratapu@hotmail.com", password:"An@123"});

    assert.equal(loginToken.length, 36);

})