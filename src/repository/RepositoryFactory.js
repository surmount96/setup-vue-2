import ApiRepository from "./ApiRepository";

const repositories = {
    request: ApiRepository
}

export const RepositoryFactory = {
    get: name => repositories[name]
}

