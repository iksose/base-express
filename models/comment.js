export class Comment{
  constructor(){}
  static get(id,cb){
    cb(null, {id:id, text: 'Very nice example'})
  }
}
