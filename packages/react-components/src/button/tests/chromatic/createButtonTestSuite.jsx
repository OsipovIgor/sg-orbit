import { Badge } from "@react-components/badge";
import { IconGroup, SignoutIcon } from "@react-components/icons";
import { Stack, VerticalStack } from "@react-components/stack";
import { cloneElement } from "react";

function Button({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createButtonTestSuite(button, stories) {
    return stories
        .add("default", () =>
            <VerticalStack>
                <Stack align="end">
                    <Button size="mini" element={button}>Button</Button>
                    <Button size="tiny" element={button}>Button</Button>
                    <Button size="small" element={button}>Button</Button>
                    <Button element={button}>Button</Button>
                    <Button size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button loading size="mini" element={button}>Button</Button>
                    <Button loading size="tiny" element={button}>Button</Button>
                    <Button loading size="small" element={button}>Button</Button>
                    <Button loading element={button}>Button</Button>
                    <Button loading size="large" element={button}>Button</Button>
                </Stack>
                <Stack>
                    <Button fluid element={button}>Button</Button>
                </Stack>
                <Stack className="w-10">
                    <Button fluid element={button}>Button</Button>
                </Stack>
                <Stack>
                    <Button loading fluid element={button}>Button</Button>
                </Stack>
            </VerticalStack>
        )
        .add("icon", () =>
            <VerticalStack>
                <Stack align="end">
                    <Button iconLeft={<SignoutIcon />} size="mini" element={button}>Button</Button>
                    <Button iconLeft={<SignoutIcon />} size="tiny" element={button}>Button</Button>
                    <Button iconLeft={<SignoutIcon />} size="small" element={button}>Button</Button>
                    <Button iconLeft={<SignoutIcon />} element={button}>Button</Button>
                    <Button iconLeft={<SignoutIcon />} size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button iconLeft={<IconGroup><SignoutIcon /><SignoutIcon /><SignoutIcon /></IconGroup>} size="mini" element={button}>Button</Button>
                    <Button iconLeft={<IconGroup><SignoutIcon /><SignoutIcon /><SignoutIcon /></IconGroup>} size="tiny" element={button}>Button</Button>
                    <Button iconLeft={<IconGroup><SignoutIcon /><SignoutIcon /><SignoutIcon /></IconGroup>} size="small" element={button}>Button</Button>
                    <Button iconLeft={<IconGroup><SignoutIcon /><SignoutIcon /><SignoutIcon /></IconGroup>} element={button}>Button</Button>
                    <Button iconLeft={<IconGroup><SignoutIcon /><SignoutIcon /><SignoutIcon /></IconGroup>} size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button iconRight={<SignoutIcon />} size="mini" element={button}>Button</Button>
                    <Button iconRight={<SignoutIcon />} size="tiny" element={button}>Button</Button>
                    <Button iconRight={<SignoutIcon />} size="small" element={button}>Button</Button>
                    <Button iconRight={<SignoutIcon />} element={button}>Button</Button>
                    <Button iconRight={<SignoutIcon />} size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button iconRight={<IconGroup><SignoutIcon /><SignoutIcon /><SignoutIcon /></IconGroup>} size="mini" element={button}>Button</Button>
                    <Button iconRight={<IconGroup><SignoutIcon /><SignoutIcon /><SignoutIcon /></IconGroup>} size="tiny" element={button}>Button</Button>
                    <Button iconRight={<IconGroup><SignoutIcon /><SignoutIcon /><SignoutIcon /></IconGroup>} size="small" element={button}>Button</Button>
                    <Button iconRight={<IconGroup><SignoutIcon /><SignoutIcon /><SignoutIcon /></IconGroup>} element={button}>Button</Button>
                    <Button iconRight={<IconGroup><SignoutIcon /><SignoutIcon /><SignoutIcon /></IconGroup>} size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} size="mini" element={button}>Button</Button>
                    <Button iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} size="tiny" element={button}>Button</Button>
                    <Button iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} size="small" element={button}>Button</Button>
                    <Button iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} element={button}>Button</Button>
                    <Button iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button loading iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} size="mini" element={button}>Button</Button>
                    <Button loading iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} size="tiny" element={button}>Button</Button>
                    <Button loading iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} size="small" element={button}>Button</Button>
                    <Button loading iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} element={button}>Button</Button>
                    <Button loading iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} size="large" element={button}>Button</Button>
                </Stack>
                <Stack>
                    <Button fluid iconLeft={<SignoutIcon />} iconRight={<SignoutIcon />} element={button}>Button</Button>
                </Stack>
            </VerticalStack>
        )
        .add("badge", () =>
            <VerticalStack>
                <Stack align="end">
                    <Button badgeLeft={<Badge variant="dot" />} size="mini" element={button}>Button</Button>
                    <Button badgeLeft={<Badge variant="dot" />} size="tiny" element={button}>Button</Button>
                    <Button badgeLeft={<Badge variant="dot" />} size="small" element={button}>Button</Button>
                    <Button badgeLeft={<Badge variant="dot" />} element={button}>Button</Button>
                    <Button badgeLeft={<Badge variant="dot" />} size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button badgeLeft={<Badge>60</Badge>} size="mini" element={button}>Button</Button>
                    <Button badgeLeft={<Badge>60</Badge>} size="tiny" element={button}>Button</Button>
                    <Button badgeLeft={<Badge>60</Badge>} size="small" element={button}>Button</Button>
                    <Button badgeLeft={<Badge>60</Badge>} element={button}>Button</Button>
                    <Button badgeLeft={<Badge>60</Badge>} size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button badgeRight={<Badge variant="dot" />} size="mini" element={button}>Button</Button>
                    <Button badgeRight={<Badge variant="dot" />} size="tiny" element={button}>Button</Button>
                    <Button badgeRight={<Badge variant="dot" />} size="small" element={button}>Button</Button>
                    <Button badgeRight={<Badge variant="dot" />} element={button}>Button</Button>
                    <Button badgeRight={<Badge variant="dot" />} size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button badgeRight={<Badge>60</Badge>} size="mini" element={button}>Button</Button>
                    <Button badgeRight={<Badge>60</Badge>} size="tiny" element={button}>Button</Button>
                    <Button badgeRight={<Badge>60</Badge>} size="small" element={button}>Button</Button>
                    <Button badgeRight={<Badge>60</Badge>} element={button}>Button</Button>
                    <Button badgeRight={<Badge>60</Badge>} size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} size="mini" element={button}>Button</Button>
                    <Button badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} size="tiny" element={button}>Button</Button>
                    <Button badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} size="small" element={button}>Button</Button>
                    <Button badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} element={button}>Button</Button>
                    <Button badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button loading badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} size="mini" element={button}>Button</Button>
                    <Button loading badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} size="tiny" element={button}>Button</Button>
                    <Button loading badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} size="small" element={button}>Button</Button>
                    <Button loading badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} element={button}>Button</Button>
                    <Button loading badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} size="large" element={button}>Button</Button>
                </Stack>
                <Stack>
                    <Button fluid badgeLeft={<Badge variant="dot" />} badgeRight={<Badge>60</Badge>} element={button}>Button</Button>
                </Stack>
            </VerticalStack>
        )
        .add("primary", () =>
            <VerticalStack>
                <Stack align="end">
                    <Button color="primary" size="mini" element={button}>Button</Button>
                    <Button color="primary" size="tiny" element={button}>Button</Button>
                    <Button color="primary" size="small" element={button}>Button</Button>
                    <Button color="primary" element={button}>Button</Button>
                    <Button color="primary" size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button loading color="primary" size="mini" element={button}>Button</Button>
                    <Button loading color="primary" size="tiny" element={button}>Button</Button>
                    <Button loading color="primary" size="small" element={button}>Button</Button>
                    <Button loading color="primary" element={button}>Button</Button>
                    <Button loading color="primary" size="large" element={button}>Button</Button>
                </Stack>
            </VerticalStack>
        )
        .add("secondary", () =>
            <VerticalStack>
                <Stack align="end">
                    <Button color="secondary" size="mini" element={button}>Button</Button>
                    <Button color="secondary" size="tiny" element={button}>Button</Button>
                    <Button color="secondary" size="small" element={button}>Button</Button>
                    <Button color="secondary" element={button}>Button</Button>
                    <Button color="secondary" size="large" element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button loading color="secondary" size="mini" element={button}>Button</Button>
                    <Button loading color="secondary" size="tiny" element={button}>Button</Button>
                    <Button loading color="secondary" size="small" element={button}>Button</Button>
                    <Button loading color="secondary" element={button}>Button</Button>
                    <Button loading color="secondary" size="large" element={button}>Button</Button>
                </Stack>
            </VerticalStack>
        )
        .add("circular", () =>
            <VerticalStack>
                <Stack align="end">
                    <Button circular size="mini" element={button}>Aa</Button>
                    <Button circular size="tiny" element={button}>Aa</Button>
                    <Button circular size="small" element={button}>Aa</Button>
                    <Button circular element={button}>Aa</Button>
                    <Button circular size="large" element={button}>Aa</Button>
                </Stack>
                <Stack align="end">
                    <Button loading circular size="mini" element={button}>Aa</Button>
                    <Button loading circular size="tiny" element={button}>Aa</Button>
                    <Button loading circular size="small" element={button}>Aa</Button>
                    <Button loading circular element={button}>Aa</Button>
                    <Button loading circular size="large" element={button}>Aa</Button>
                </Stack>
            </VerticalStack>
        )
        .add("states", () =>
            <VerticalStack>
                <Stack align="end">
                    <Button active size="mini" element={button}>Button</Button>
                    <Button active size="tiny" element={button}>Button</Button>
                    <Button active size="small" element={button}>Button</Button>
                    <Button active element={button}>Button</Button>
                    <Button active size="large" element={button}>Button</Button>
                    <Button loading active element={button}>Button</Button>
                </Stack>
                <Stack>
                    <Button fluid active element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button focus size="mini" element={button}>Button</Button>
                    <Button focus size="tiny" element={button}>Button</Button>
                    <Button focus size="small" element={button}>Button</Button>
                    <Button focus element={button}>Button</Button>
                    <Button focus size="large" element={button}>Button</Button>
                    <Button loading focus element={button}>Button</Button>
                </Stack>
                <Stack>
                    <Button fluid focus element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button hover size="mini" element={button}>Button</Button>
                    <Button hover size="tiny" element={button}>Button</Button>
                    <Button hover size="small" element={button}>Button</Button>
                    <Button hover element={button}>Button</Button>
                    <Button hover size="large" element={button}>Button</Button>
                    <Button loading hover element={button}>Button</Button>
                </Stack>
                <Stack>
                    <Button fluid hover element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button focus hover size="mini" element={button}>Button</Button>
                    <Button focus hover size="tiny" element={button}>Button</Button>
                    <Button focus hover size="small" element={button}>Button</Button>
                    <Button focus hover element={button}>Button</Button>
                    <Button focus hover size="large" element={button}>Button</Button>
                    <Button loading focus hover element={button}>Button</Button>
                </Stack>
                <Stack>
                    <Button fluid focus hover element={button}>Button</Button>
                </Stack>
                <Stack align="end">
                    <Button disabled size="mini" element={button}>Button</Button>
                    <Button disabled size="tiny" element={button}>Button</Button>
                    <Button disabled size="small" element={button}>Button</Button>
                    <Button disabled element={button}>Button</Button>
                    <Button disabled size="large" element={button}>Button</Button>
                    <Button loading disabled element={button}>Button</Button>
                </Stack>
                <Stack>
                    <Button fluid disabled element={button}>Button</Button>
                </Stack>
            </VerticalStack>
        )
        .add("styling", () =>
            <Stack>
                <Button className="bg-red" element={button}>Button</Button>
                <Button style={{ backgroundColor: "red" }} element={button}>Button</Button>
            </Stack>
        )
        .add("as anchor", () =>
            <Button as="a" element={button}>Button</Button>
        );
}
