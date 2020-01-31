import add from './add';

describe('module-3/add', () => {
  it('exists', () => {
    const type = typeof (add);

    expect(type).toEqual('function');
  })

  it("result when input takes empty string", () => {
    const result = add("");
    expect(result).toEqual(0);
  });

  it("result when input takes string of 1 integer", () => {
   const result = add("1");
   expect(result).toEqual(1);
  });

  it("result when input takes string of two integers '1,2'",()=>{
  const result = add("1,2");
  expect(result).toEqual(3);
  });

  it("result when input takes string '1\n2,3'",()=>{
    const result  = add("1\n2,3");
    expect(result).toEqual(6);
  });

  it("return error when negative value passed E.g : '-1,-5,3,4'",()=>{
   expect(()=>add("-1,-5,3,4")).toThrowError("Negative not allowed : -1, -5");
  });
});