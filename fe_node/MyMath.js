class MyMath{
  static sum = (...args)=>args.reduce((a,i)=>a+i, 0);
  static sub = (a,b) => a - b;
  static mul = (a,b) => a * b;
}

exports.MyMath = MyMath;