import './app.css';
import "@fontsource/calistoga";
import Alpine from 'alpinejs';
import mapValues from 'lodash/mapValues';
import definition from './definition';

Alpine.data('converter', () => ({
    type: null,
    value: null,
    unit: null,

    definition,

    init() {
        this.$watch('type', value => {
            this.unit = Object.keys(this.definition[value].units)[0];
        });
        this.type = Object.keys(this.definition)[0];
    },

    types() {
        return mapValues(this.definition, d => d.label);
    },
    units(type = null) {
        return mapValues(this.definition[type || this.type].units, u => u.label);
    },
    convert(from, value, to) {
        window.umami.trackEvent(
            'convert',
            {
                type: this.type,
                from: from,
                value: value,
                to: to,
            },
        );

        return (value || 0)
            * (this.definition[this.type]?.units[from]?.multiplier || 0)
            / (this.definition[this.type]?.units[to]?.multiplier || 0);
    }
}));

Alpine.start();
