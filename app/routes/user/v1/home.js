const express = require('express');
const router = express.Router();

// controllers 
const { user: userController } = config.path.controllers;

const HomeController = require(`${userController}/v1/HomeController`)

  
/**
 * @api {get} /api/user/v1/pay pay
 * @apiVersion 1.0.0
 * @apiName pay
 * @apiDescription pay : if the online pay was unsuccessfull , there will be no "payURl".
 * @apiGroup user
 * @apiSuccessExample {json} Success-Response:
 * {
 *      success: true,
 *      message: "پرداخت با موفقیت انجام شد",
 * }
 */
 router.post('/',HomeController.index.bind(HomeController));




module.exports = router;