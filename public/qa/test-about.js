/**
 * Created by mac on 2017/12/17.
 */
suite('"About" Page Tests',function () {
    test('page should contain link to contact page',function () {
        assert($('a[href="/contact"]').length);
    })
})