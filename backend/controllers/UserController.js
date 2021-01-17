import asyncHandler from 'express-async-handler'

//@route GET/api/users
//@desc Test Route
//@access Public
const TestController= asyncHandler ( async (req,res) => {
    res.send('Test User Controller')
})

export {
    TestController
}