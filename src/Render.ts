import { ICommand, IFilterAttributes, IRender, IRenderContainerListing, IRenderSprites } from "./IPixelRendr";

/**
 * Summary container for a single PixelRendr sprite source. The original source
 * is stored, along with any generated outputs, information on its container,
 * and any filter.
 */
export class Render implements IRender {
    /**
     * The original command to create this Render, which is either a plain
     * String source or an Array representing a command.
     */
    public source: string | any[];

    /**
     * Output sprites generated by the source.
     */
    public sprites: IRenderSprites;

    /**
     * An optional filter to change colors by, if source is a "filter" command.
     */
    public filter: IFilterAttributes | undefined;

    /**
     * Any containers storing this Render.
     */
    public containers: IRenderContainerListing[];

    /**
     * Initializes a new instance of the Render clsas.
     *
     * @param source   The original command to create this render.
     * @param filter   An optional filter to change colors by, if source
     *                 is a "filter" command.
     */
    public constructor(source: ICommand, filter?: IFilterAttributes) {
        this.source = source;
        this.filter = filter;
        this.sprites = {};
        this.containers = [];
    }
}
