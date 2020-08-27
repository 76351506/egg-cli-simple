/*
 * @Author: heinan 
 * @Date: 2020-08-27 10:50:00 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-08-27 10:50:47
 */

'use strict';
const { Controller } = require('egg');

class HomeController extends Controller {
  index() {
    this.ctx.body = "hi egg";
  }
}
module.exports = HomeController;