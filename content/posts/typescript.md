---
title: To TypeScript or Not To TypeScript
description: A discussion about whether it's worth the extra effort to add TypeScript to a JavaScript...
postDate: September 25, 2019
---

## Some Thoughts

A few months back I started using TypeScript on the Silicon Valley Code Camp New Web App (It’s written using React now and is mobile responsive based of bootstrap). For everyone, it’s different but here are my 5 steps of coming to terms with TypeScript (so far).

1. I know I should learn TypeScript, just no time.
2. I’m trying to convert my first project and everyone says it’s easy. This is crazy hard. How does anyone use it?
3. Maybe this isn’t so bad, I can see it helping for getting parameters correct but otherwise, it’s really a lot of trouble.
4. It is helping me quite a bit. I keep running into problems that I know without TypeScript would be hard to fix.
5. I wonder if I’m using the “any” type too much and I’m somehow loosing important information I should really know about

## Todays Quandry

I have a type interface that I’ve created that basically looks like this:

```ts
export interface Session {
    id: number;
    room?: string;
    title?: string;
    description?: string;
}
```

I’ve recently added the optional null to all the non key attributes using the ?. The reason I did this is because I’m creating a new object of type Session and I want to mention some but not all of the attributes. That is, something like this:

```ts
const sessionEmpty : Session = {
    id: i,
    title: 'Number For All'
    room: 'Main Hall #1'
};
```

Sadly, that broke a lot of my code that now I have to fix. For example, I have this sort method I call with title and now it’s causing a compile error because it could get a null value and throw an error. Here is the original sort method:

```ts
const sessionRoomsList: string[] = sessionRoomsListDistinct(
                sessions
            ).sort((n1, n2) => {
                if (n1.toLowerCase() > n2.toLowerCase()) {
                    return 1;
                }
                if (n1.toLowerCase() < n2.toLowerCase()) {
                    return -1;
                }
                return 0;
            });
```

Obviously, the reason is that now that the passed in room value might be null and that would make my JavaScript app crash with an object not found.

My first inclination (which makes my app keep working) is just to change the type of the incoming parameters to any. That would look like this:

```ts
const sessionRoomsList: string[] = sessionRoomsListDistinct(
                sessions
            ).sort((n1 : any, n2 : any) => {
                if (n1.toLowerCase() > n2.toLowerCase()) {
                    return 1;
                }
                if (n1.toLowerCase() < n2.toLowerCase()) {
                    return -1;
                }
                return 0;
            });
```

The problem now is that though this compiles, it will crash at runtime if room is null. We all know what this means.

Debt goes up, happiness goes down.

The right thing to do is this (and then right a blog post about it so it doesn’t feel like a total waste of time).

```ts
const sessionRoomsList: (string | undefined)[] = sessionRoomsListDistinct(
    sessions
).sort((n1, n2) => {

    if ((n1 ? n1 : '').toLowerCase() > (n2 ? n2 : '').toLowerCase()) {
        return 1;
    }
    if ((n1 ? n1 : '').toLowerCase() < (n2 ? n2 : '').toLowerCase()) {
        return -1;
    }
    return 0;
});
```

Thoughts? Am I crazy?

What will be my steps 6, 7 and 8 in my TypeScript Journey?

Hope this helps.