import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { toHaveNoViolations } from 'jest-axe';

global.expect.extend(toHaveNoViolations);
