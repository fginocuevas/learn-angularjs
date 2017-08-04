export class Hero {

  private state: string = 'inactive';

  constructor (public id: number, public name: string, public image?: string) {

    if(!image){
      this.image= "profile_placeholder.jpg";
    }
  }

  toggleState(){
    this.state =  (this.state === 'active' ? 'inactive' : 'active');
  }
}
