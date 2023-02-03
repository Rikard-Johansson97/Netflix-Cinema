
    export interface Imdb {
        rating: number;
        votes: number;
        id: number;
    }

    export interface Viewer {
        rating: number;
        numReviews: number;
        meter: number;
    }

    export interface Critic {
        rating: number;
        numReviews: number;
        meter: number;
    }

    export interface Tomatoes {
        website: string;
        viewer: Viewer;
        dvd: Date;
        critic: Critic;
        lastUpdated: Date;
        consensus: string;
        rotten: number;
        production: string;
        fresh: number;
    }

    export interface Awards {
        wins: number;
        nominations: number;
        text: string;
    }

    export interface Movie {
        _id: string;
        fullplot: string;
        imdb: Imdb;
        year: number;
        plot: string;
        genres: string[];
        rated: string;
        metacritic: number;
        title: string;
        lastupdated: string;
        languages: string[];
        writers: string[];
        type: string;
        tomatoes: Tomatoes;
        poster: string;
        num_mflix_comments: number;
        released: Date;
        awards: Awards;
        countries: string[];
        cast: string[];
        directors: string[];
        runtime: number;
        loading: boolean;
    }

    export interface SeatType {
        occupied: boolean;
        id: string;
        selected: boolean;
        onCLick?: any;
        movieId: string;
        price: number;
        map: any;
        slice: any;
        length: number;
        seat: number;
        booked: boolean;
        find: () => any;
        filter: () => any;
      }