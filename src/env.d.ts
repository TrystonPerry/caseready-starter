// Side-effect CSS imports otherwise fail typecheck with TS2882.
// tsconfig includes "src", so this file is part of the program.
declare module "*.css";
