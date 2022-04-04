export interface DoCollideObject {
    x: number;
    y: number;
    w: number;
    h: number;
}

export function doCollide(a: DoCollideObject, b: DoCollideObject): boolean {
    const aLef = a.x;
    const aRig = a.x + a.w;
    const aTop = a.y;
    const aBot = a.y + a.h;
    const bLef = b.x;
    const bRig = b.x + b.w;
    const bTop = b.y;
    const bBot = b.y + b.h;

    return (
        ((aLef >= bLef && aLef < bRig) || (aLef <= bLef && aRig > bLef)) &&
        ((aTop >= bTop && aTop < bBot) || (aTop <= bTop && aBot > bTop))
    );
}
