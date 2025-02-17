class Music {
  public name: string;
  public artist: string;
  public thumbnail: string;
  public length: number;
  public isFree: boolean;

  constructor(
    name: string,
    artist: string,
    thumbnail: string = "somethumbnail.jpg",
    length: number,
    isFree: boolean
  ) {
    this.name = name;
    this.artist = artist;
    this.thumbnail = thumbnail;
    this.length = length;
    this.isFree = isFree;
  }
}
