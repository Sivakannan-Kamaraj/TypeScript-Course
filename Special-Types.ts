const doSomething = (): void => {
  console.log('doSomething');
}

const doSomething = (): never => {
  console.log("doSomething");
};

const doSomething = (): void => {
 throw 'never'
}

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;

