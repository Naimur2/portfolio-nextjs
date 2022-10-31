interface IRatingsHook {
    currentRatings: number;
    maximumRatings: number;
}

interface IRatingsArray {
    key: number;
    rating: number;
}

export default function useRatings({
    currentRatings,
    maximumRatings,
}: IRatingsHook): IRatingsArray[] {
    const getRatings = (
        ratings: number,
        maximumNumberOfStars: number
    ): IRatingsArray[] => {
        const value = ratings.toFixed(1);
        const splittedValue = value?.toString().split(".");
        const wholeValue = parseInt(splittedValue[0]);
        const decimalValue = parseInt(splittedValue[1]);
        const stars: IRatingsArray[] = [];

        let upDatedStars = Array.from({
            length: maximumNumberOfStars,
        });

        for (let i = 0; i < wholeValue; i++) {
            if (wholeValue > 0) {
                stars.push({
                    key: i,
                    value: 1,
                });
            }
        }
        if (decimalValue > 0) {
            stars.push({
                key: stars.length,
                value: 0.5,
            });
        }

        if (ratings > maximumNumberOfStars) {
            throw new Error(
                `Ratings should be less than or equal to ${maximumNumberOfStars}`
            );
        } else if (ratings < 0 || !maximumNumberOfStars) {
            throw new Error(`Invalid ratings information`);
        } else {
            upDatedStars = upDatedStars.map((_, index) => {
                if (stars[index]) {
                    return stars[index];
                }
                return {
                    key: index,
                    value: 0,
                };
            });
        }
        return upDatedStars as IRatingsArray[];
    };

    return getRatings(currentRatings, maximumRatings);
}
