describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  })

  it('spyOn numero de comparaciones', function(){
    spyOn(window, 'contador').and.callThrough();
    let array = bubbleSort([5,1])
  expect(window.contador.calls.count()).toEqual(1);
  });

  it('spyOn swap', function(){
    spyOn(window, 'swap').and.callThrough();
    let array = bubbleSort([5,1])
  expect(window.swap.calls.count()).toEqual(1);
  });

  it('handles a array', function(){
    expect( bubbleSort([5,1]) ).toEqual( [1,5] );
  });

  it('handles an sorted array', function(){
    expect( bubbleSort([1,4,5,9]) ).toEqual( [1,4,5,9] );
  });

  it('handles a par array', function(){
    expect( bubbleSort([9,5,4,1]) ).toEqual( [1,4,5,9] );
  });

  it('handles a inpar array', function(){
    expect( bubbleSort([5,1,4,9,2]) ).toEqual( [1,2,4,5,9] );
  });

  it('handles an array with the same elements', function(){
    expect( bubbleSort([5,1,2,2]) ).toEqual( [1,2,2,5] );
  });
});
