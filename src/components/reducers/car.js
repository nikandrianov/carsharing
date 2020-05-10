import elantra from '../../assets/image/cars/elantra.png';
import creta from '../../assets/image/cars/creta.png';
import i30 from '../../assets/image/cars/i30n.png';
import sonata from '../../assets/image/cars/sonata.png';

export default function () {
    return [
        {
            id: 1,
            name: "elantra",
            pricemin: 12000,
            pricemax: 25000,
            src: elantra
        },
        {
            id: 2,
            name: "creta",
            pricemin: 10000,
            pricemax: 32000,
            src: creta
        },
        {
            id: 3,
            name: "i30 N",
            pricemin: 12000,
            pricemax: 25000,
            src: i30
        },
        {
            id: 4,
            name: "sonata",
            pricemin: 10000,
            pricemax: 32000,
            src: sonata
        }
    ]
}
