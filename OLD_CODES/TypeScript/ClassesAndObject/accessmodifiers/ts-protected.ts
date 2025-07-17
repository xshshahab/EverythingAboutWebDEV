class Music {
  protected name: string = "Sun mere dil";
}

class MusicMaker extends Music {
  public artist = "XSH - SHAHAB";
  getMusicName() {
    this.name = "Sun Mere Dil <3";
  }
}

let m1 = new MusicMaker();
m1.getMusicName();
