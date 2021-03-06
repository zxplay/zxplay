import * as CodeMirror from "codemirror";

// Based on z80 mode available in the CodeMirror repository:
// https://github.com/codemirror/CodeMirror/blob/master/mode/z80/z80.js
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// https://codemirror.net/doc/manual.html#modeapi

// noinspection JSUnresolvedFunction
CodeMirror.defineMode('pasmo', function(_config, _) {
    const keywords1 = /^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i;
    const keywords2 = /^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i;

    const variables1 = /^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i;
    const variables2 = /^(n?[zc]|p[oe]?|m)\b/i;
    const errors = /^([hl][xy]|i[xy][hl]|slia|sll)\b/i;
    const numbers = /^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;

    return {
        startState: function() {
            return {
                context: 0
            };
        },
        token: function(stream, state) {
            if (!stream.column()) {
                state.context = 0;
            }

            if (stream.eatSpace()) {
                return null;
            }

            let w;

            if (stream.eatWhile(/\w/)) {
                if (stream.eat('.')) {
                    stream.eatWhile(/\w/);
                }

                w = stream.current();

                if (stream.indentation()) {
                    if ((state.context == 1 || state.context == 4) && variables1.test(w)) {
                        state.context = 4;
                        return 'var2';
                    }

                    if (state.context == 2 && variables2.test(w)) {
                        state.context = 4;
                        return 'var3';
                    }

                    if (keywords1.test(w)) {
                        state.context = 1;
                        return 'keyword';
                    } else if (keywords2.test(w)) {
                        state.context = 2;
                        return 'keyword';
                    } else if (state.context == 4 && numbers.test(w)) {
                        return 'number';
                    }

                    if (errors.test(w)) {
                        return 'error';
                    }
                } else if (stream.match(numbers)) {
                    return 'number';
                } else {
                    return null;
                }
            } else if (stream.eat(';')) {
                stream.skipToEnd();
                return 'comment';
            } else if (stream.eat('"')) {
                while (w = stream.next()) {
                    if (w == '"') {
                        break;
                    }

                    if (w == '\\') {
                        stream.next();
                    }
                }

                return 'string';
            } else if (stream.eat('\'')) {
                if (stream.match(/\\?.'/))
                    return 'number';
            } else if (stream.eat('.') || stream.sol() && stream.eat('#')) {
                state.context = 5;

                if (stream.eatWhile(/\w/)) {
                    return 'def';
                }
            } else if (stream.eat('$')) {
                if (stream.eatWhile(/[\da-f]/i)) {
                    return 'number';
                }
            } else if (stream.eat('%')) {
                if (stream.eatWhile(/[01]/)) {
                    return 'number';
                }
            } else {
                stream.next();
            }

            return null;
        }
    };
});

// noinspection JSUnresolvedFunction
CodeMirror.defineMIME("text/x-pasmo", "pasmo");
