describe('Split Array function', function() {
  it('es capaz de dividir el arreglo par en dos partes', function() {
    expect(split([1,2])).toEqual([[1],[2]])
  });
  it('es capaz de dividir el arreglo impar en dos partes', function() {
    expect(split([1,2,3])).toEqual([[1],[2,3]])
  });
});

describe('Merge', function(){
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function(){
    expect(merge([2,5,6],[1,3,4])).toEqual([1,2,3,4,5,6])
  });
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado aunque se un length impar', function(){
    expect(merge([2],[1,3])).toEqual([1,2,3])
  });

});


describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  })

  it('spyOn merge', function(){
    spyOn(window, 'merge').and.callThrough();
    let array = mergeSort([5,1])
  expect(window.merge.calls.count()).toEqual(1);
  })

  it('spyOn split', function(){
    spyOn(window, 'split').and.callThrough();
    let array = mergeSort([5,1])
  expect(window.split.calls.count()).toEqual(1);
  })

  it('handles a array', function(){
    expect( mergeSort([5,1]) ).toEqual( [1,5] );
  });

  it('handles an sorted array', function(){
    expect( mergeSort([1,4,5,9]) ).toEqual( [1,4,5,9] );
  });

  it('handles a par array', function(){
    expect( mergeSort([9,5,4,1]) ).toEqual( [1,4,5,9] );
  });

  it('handles a inpar array', function(){
    expect( mergeSort([5,1,4,9,2]) ).toEqual( [1,2,4,5,9] );
  });

  it('handles an array with the same elements', function(){
    expect( mergeSort([5,1,2,2]) ).toEqual( [1,2,2,5] );
  });
});
