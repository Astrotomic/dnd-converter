import FadCurrency from '@fortawesome/fontawesome-pro/svgs/duotone/coins.svg?raw';
import FadVolume from '@fortawesome/fontawesome-pro/svgs/duotone/cube.svg?raw';
import FadWeight from '@fortawesome/fontawesome-pro/svgs/duotone/scale-balanced.svg?raw';
import FadArea from '@fortawesome/fontawesome-pro/svgs/duotone/toilet-paper-blank.svg?raw';
import FadLength from '@fortawesome/fontawesome-pro/svgs/duotone/ruler.svg?raw';

function svg(svg) {
    const parser = new DOMParser();
    const el = parser.parseFromString(svg, 'text/html');
    el.querySelector('svg').setAttribute('fill', 'currentColor');

    return el.querySelector('svg').outerHTML;
}

export default {
    currency: {
        label: 'Currency',
        icon: svg(FadCurrency),
        description: 'I may be broke in the real world, but at least I\'m a millionaire in the land of Dungeons and Dragons - I just need to find someone to accept my 50,000 copper pieces for their goods and services!',
        units: {
            copper: {
                label: 'Copper (cp)',
                multiplier: 1,
            },
            silver: {
                label: 'Silver (sp)',
                multiplier: 10,
            },
            electrum: {
                label: 'Electrum (ep)',
                multiplier: 50,
            },
            gold: {
                label: 'Gold (gp)',
                multiplier: 100,
            },
            platin: {
                label: 'Platin (pp)',
                multiplier: 1000,
            },
        },
    },
    volume: {
        label: 'Volume',
        icon: svg(FadVolume),
        description: 'I know the tavern\'s keg of ale is bottomless, but that doesn\'t mean I need to drink it all by myself - even a half-orc barbarian has his limits!',
        units: {
            ounce: {
                label: 'Ounce (oz)',
                multiplier: 1,
            },
            vial: {
                label: 'Vial',
                multiplier: 4,
            },
            mug: {
                label: 'Mug',
                multiplier: 8,
            },
            pint: {
                label: 'Pint',
                multiplier: 16,
            },
            flask: {
                label: 'Flask',
                multiplier: 16,
            },
            bottle: {
                label: 'Bottle',
                multiplier: 24,
            },
            pitcher: {
                label: 'Pitcher',
                multiplier: 60,
            },
            gallon: {
                label: 'Gallon',
                multiplier: 128,
            },
            barrel: {
                label: 'Barrel',
                multiplier: 5376,
            },
        },
    },
    weight: {
        label: 'Weight',
        icon: svg(FadWeight),
        description: 'Why did the halfling thief only steal one gold piece from the dragon\'s hoard? Because she couldn\'t carry any more - she\'s already struggling to lug around her +5 sword of slicing and dicing!',
        units: {
            ounce: {
                label: 'Ounce (oz)',
                multiplier: 1,
            },
            pound: {
                label: 'Pound (lb)',
                multiplier: 16,
            },
            quarter: {
                label: 'Quarter (qt)',
                multiplier: 448,
            },
            barrel: {
                label: 'Barrel',
                multiplier: 3200,
            },
        }
    },
    area: {
        label: 'Area',
        icon: svg(FadArea),
        description: 'Sure, I could paint you a portrait of your character for 100 gold pieces, but it will only be half-finished - I\'ll need at least another 100 gold pieces to paint the other half of your face!',
        units: {
            sqft: {
                label: 'Feet² (sq ft)',
                multiplier: 1,
            },
            sqyd: {
                label: 'Yard² (sq yd)',
                multiplier: 9,
            },
        }
    },
    length: {
        label: 'Length',
        icon: svg(FadLength),
        description: 'I know we\'re on a quest to save the kingdom, but can we please take a break? My feet are killing me from all this walking - I didn\'t sign up to be a marathon runner, I thought we were just going on a short jaunt to the nearest village!',
        units: {
            inch: {
                label: 'Inch (in)',
                multiplier: 1,
            },
            foot: {
                label: 'Foot (ft)',
                multiplier: 12,
            },
            yard: {
                label: 'Yard (yd)',
                multiplier: 36,
            },
            mile: {
                label: 'Mile (mi)',
                multiplier: 63360,
            },
        }
    },
};
