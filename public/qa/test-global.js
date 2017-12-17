/**
 * Created by dell on 2017/12/15.
 */
suite('Global Tests',function(){
    test('page has a valid title',function(){
        assert(document.title&&document.title.match(/\S/)&&document.title.toUpperCase()!=='TODO');
    })
})