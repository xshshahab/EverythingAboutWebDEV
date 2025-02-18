let a: any = 12;

// both syntax are correct
(a as string).length;
(a as number).toString();

<number>a;
