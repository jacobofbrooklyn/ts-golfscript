// ~~ Util ~~

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ASCII = [
  "\u0000",
  "\u0001",
  "\u0002",
  "\u0003",
  "\u0004",
  "\u0005",
  "\u0006",
  "\u0007",
  "\b",
  "\t",
  "\n",
  "\u000b",
  "\f",
  "\r",
  "\u000e",
  "\u000f",
  "\u0010",
  "\u0011",
  "\u0012",
  "\u0013",
  "\u0014",
  "\u0015",
  "\u0016",
  "\u0017",
  "\u0018",
  "\u0019",
  "\u001a",
  "\u001b",
  "\u001c",
  "\u001d",
  "\u001e",
  "\u001f",
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~"
];
type WordChar =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "_";

type IndexOf<Item, List extends any[], Index extends 1[] = []> = List extends [
  Item,
  ...any
]
  ? Index["length"]
  : List extends [any, ...infer R extends any[]]
  ? IndexOf<Item, R, [...Index, 1]>
  : -1;

// ~~ Golfscript ~~

/*

I think I've finished the bulk of the work. Now I just have to implement the built-ins, which
might be kind of tricky. I think I'm going to drop support for bitwise operations for now but
I might want to reconsider that at some point by working on binary digit lists instead of
base-10; after all, I am going to have to implement base conversion anyway... I'll have to
think about this a bit more. It might make implementation a bit harder since binary is 
obviously a lot less intuitive than base-10 to a human like me so I might struggle getting it
to work right. Fingers crossed.

I also have to figure out that bug with arrays I was running into before

*/

type BuiltIns = {};
