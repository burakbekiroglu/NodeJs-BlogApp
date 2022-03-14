const Blog =require('../models/Blog')
const BaseService=require('./BaseService')

class BlogService extends BaseService {
  async queryWithPop(obj) {
    return this.model.find(obj).populate({
      path:"categoryId",
      model:"Category"
  }).exec()
  }   
  }
  
  module.exports = new BlogService(Blog)