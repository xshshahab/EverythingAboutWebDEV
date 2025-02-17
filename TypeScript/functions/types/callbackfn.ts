function abcd(name: string, cbfn: (v: string) => void): string {
  console.log(name);
  cbfn("Main Hun");
  return "Mohan Laal Pyare";
}

abcd("Pritam", (value: string) => {
  console.log(value, "Useless callback fn");
});
