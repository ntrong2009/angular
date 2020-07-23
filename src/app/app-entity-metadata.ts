
import { EntityMetadataMap } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
    Hero: {},
    Villain: {}
}

const pluralNames = { Hero: 'Heroes'};

export const entityConfig = {
    entityMetadata,
    pluralNames
}