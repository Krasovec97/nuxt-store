import {describe, test, expect} from "vitest";


describe('import components', () => {
    test('Header components imports', async () => {
        const component = await import('../components/Header.vue');
        expect(component).toBeDefined()
    });

    test('Product components imports', async () => {
        const component = await import('../components/Product.vue');
        expect(component).toBeDefined()
    });
})
