class UnlokDev {
  static version: string = "1.1.2";
  static getPrevVersions() {
    return console.log("1.1.0");
  }

  static initialVersion() {
    return "1.0.0";
  }
}

UnlokDev.version;
UnlokDev.getPrevVersions();
