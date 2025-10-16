
export enum EDifficulty {
    Easy = 'easy',
    Normal = 'normal',
    Hard = 'hard',
    SuperHard = 'superHard'
}

export type Country = {
    name: string;
    code: string
};

export type DifficultyConfig = {
    name: string;
    countries: Country[];
    reward: number;
}

export const difficultyData: Record<EDifficulty, DifficultyConfig> = {
    [EDifficulty.Easy]: {
        name: 'Easy',
        countries: [
            { name: 'USA', code: 'us' },
            { name: 'Canada', code: 'ca' },
            { name: 'China', code: 'cn' },
            { name: 'Jamaica', code: 'jm' },
            { name: 'UK', code: 'gb' },
            { name: 'Ireland', code: 'ie' }
        ],
        reward: 3
    },
    [EDifficulty.Normal]: {
        name: 'Normal',
        countries: [
            { name: 'Serbia', code: 'rs' },
            { name: 'Sweden', code: 'se' },
            { name: 'Philippines', code: 'ph' },
            { name: 'Netherlands', code: 'nl' },
            { name: 'Bahamas', code: 'bs' },
            { name: 'Portugal', code: 'pt' }
        ],
        reward: 5
    },
    [EDifficulty.Hard]: {
        name: 'Hard',
        countries: [
            { name: 'Ghana', code: 'gh' },
            { name: 'Uganda', code: 'ug' },
            { name: 'Kenya', code: 'ke' },
            { name: 'Rwanda', code: 'rw' },
            { name: 'Brunei', code: 'bn' },
            { name: 'Mauritius', code: 'mu' }
        ],
        reward: 7
    },
    [EDifficulty.SuperHard]: {
        name: 'Super Hard!!!!!',
        countries: [
            { name: 'Monaco', code: 'mc' },
            { name: 'Indonesia', code: 'id' },
            { name: 'Poland', code: 'pl' },
            { name: 'Chad', code: 'td' },
            { name: 'Romania', code: 'ro' },
            { name: 'Dominica', code: 'dm' }
        ],
        reward: 10
    }
};

window.difficultyData = difficultyData;
