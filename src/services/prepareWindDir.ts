export const prepareWindDir = (value:string):string => {
    switch (value) {
        case 'WNW':
        return 'west north-west';

        case 'NW':
        return 'north-west';

        case 'N':
        return 'north';

        case 'NNE':
        return 'north north-east';

        case 'NE':
        return 'north-east';

        case 'E':
        return 'east';

        case 'ESE':
        return 'est south-east';

        case 'SE':
        return 'south-east';

        case 'S':
        return 'south';

        case 'SSW':
        return 'south south-west';

        case 'SW':
        return 'south-west';

        case 'W':
        return 'west';
    
        default:
            return ''
    }
}