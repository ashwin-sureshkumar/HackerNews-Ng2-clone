

export const FEEDS_MAP = new Map();

FEEDS_MAP.set('newest', {
    method : 'getNewestStories',
    limit : 100
});

FEEDS_MAP.set('top', {
    method : 'getTopStories',
    limit : 100
});


FEEDS_MAP.set('best', {
    method : 'getBestStories',
    limit : 100
});

FEEDS_MAP.set('show', {
    method : 'getShowStories',
    limit : 100
});


FEEDS_MAP.set('jobs', {
    method : 'getJobStories',
    limit : 100
});

FEEDS_MAP.set('ask', {
    method : 'getAskStories',
    limit : 100
});

