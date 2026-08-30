let first =56;


let outer=(outerArg)=>{
  const outerConst=3.14;


  let inner=(innerArg)=>{
   const innerConst=2.76;
   console.log(`first:${first}`);
   console.log(`outerArg:${outerArg}`);
    console.log(`outerConst:${outerConst}`);
     console.log(`innerArg:${innerArg}`);
      console.log(`innnerConst:${innerConst}`);

  };
  console.log(`first:${first}`);
   console.log(`outerArg:${outerArg}`);
    console.log(`outerConst:${outerConst}`);
  return inner;
}
outer(78)(90);  