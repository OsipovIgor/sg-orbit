import { CabinetEmptyIcon, ClearIcon } from "@orbit-ui/icons";
import { storiesBuilder } from "../../storybook/utils/stories-builder";

function stories() {
    return storiesBuilder("icons")
        .chromaticDelay(100)
        .build();
}

stories()
    .add("default",
         () =>
             <div>
                 <CabinetEmptyIcon />
                 <ClearIcon />
             </div>
    );