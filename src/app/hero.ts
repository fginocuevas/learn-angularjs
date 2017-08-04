export class Hero {
  constructor (public id: number, public name: string, public image?: string) {
    if(!image){
      this.image= "profile_placeholder.jpg";
    }
  }
}
